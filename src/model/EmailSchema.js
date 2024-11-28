import mongoose, {Schema} from "mongoose";

const emailSchema = new Schema(
    {
      email: {
        type: String,
        required: [true, 'Email is required'],
        trim: true,
        lowercase: true,
        validate: {
          validator: function (v) {
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v); // Simple email validation
          },
          message: 'Please enter a valid email address',
        },
      },
      submittedAt: {
        type: Date,
        default: Date.now,
      },
    },
    {
      timestamps: true, // Adds createdAt and updatedAt fields
    }
  );
  
  // Create the model
  const Email = mongoose.models.Email || mongoose.model('Email', emailSchema);
  
  module.exports = Email;