import mongoose, { Schema, Model } from "mongoose";

export interface IWaitlist {
  name: string;
  email: string;
  workType?: string;
  monthlyInvoices?: string;
  biggestPain?: string;
  ipAddress?: string;
  userAgent?: string;
  createdAt: Date;
  status: "pending" | "invited" | "joined";
}

const WaitlistSchema = new Schema<IWaitlist>(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      minlength: [2, "Name must be at least 2 characters"],
      maxlength: [100, "Name must be less than 100 characters"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      trim: true,
      index: true, // Index for faster lookups
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please provide a valid email address",
      ],
    },
    workType: {
      type: String,
      enum: [
        "designer",
        "developer",
        "writer",
        "consultant",
        "photographer",
        "marketing",
        "other",
        "",
      ],
      default: "",
    },
    monthlyInvoices: {
      type: String,
      enum: ["1-5", "6-10", "11-20", "20+", ""],
      default: "",
    },
    biggestPain: {
      type: String,
      maxlength: [500, "Pain point must be less than 500 characters"],
      default: "",
    },
    ipAddress: {
      type: String,
      default: "unknown",
    },
    userAgent: {
      type: String,
      default: "unknown",
    },
    status: {
      type: String,
      enum: ["pending", "invited", "joined"],
      default: "pending",
    },
  },
  {
    timestamps: true,
  }
);

// Create index on createdAt for better query performance
WaitlistSchema.index({ createdAt: -1 });

const Waitlist: Model<IWaitlist> =
  mongoose.models.Waitlist ||
  mongoose.model<IWaitlist>("Waitlist", WaitlistSchema);

export default Waitlist;
