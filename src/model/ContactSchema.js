import mongoose, {Schema} from "mongoose";

const contactSchema = new Schema(
    {
      name: {
        type: String,
        required: [true, 'Name is required'],
        trim: true,
        minlength: [2, 'Name must be at least 2 characters long'],
        maxlength: [50, 'Name must not exceed 50 characters'],
      },
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
      message: {
        type: String,
        required: [true, 'Message is required'],
        trim: true,
        minlength: [10, 'Message must be at least 10 characters long'],
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
  const Contact = mongoose.models.Contact || mongoose.model('Contact', contactSchema);
  
  module.exports = Contact;