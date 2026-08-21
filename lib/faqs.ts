export interface FaqItem {
  q: string;
  a: string;
}

export interface FaqSection {
  category: string;
  items: FaqItem[];
}

export const FAQ_SECTIONS: FaqSection[] = [
  {
    category: 'Getting Started',
    items: [
      {
        q: 'What is Tripknot?',
        a: 'Tripknot is a free travel discovery app by Aneeras LLP. It helps you plan smart itineraries, explore hidden gems, find weekend getaways, and travel with like-minded people — all in one place.',
      },
      {
        q: 'Is Tripknot free to use?',
        a: 'Yes, Tripknot is completely free for all end users. There are no in-app purchases or subscription fees for travellers. Our commercial model is entirely operator-facing.',
      },
      {
        q: 'How do I create an account?',
        a: 'Download the Tripknot app from the App Store or Google Play, tap "Sign Up", and register with your email address or continue with Google or Apple sign-in.',
      },
      {
        q: 'Which platforms does Tripknot support?',
        a: 'Tripknot is available on iOS and Android. You can also browse content on our website at tripknot.in.',
      },
    ],
  },
  {
    category: 'Account & Profile',
    items: [
      {
        q: 'How do I update my profile?',
        a: 'Open the app, go to your Profile tab, and tap the edit icon. You can update your name, photo, bio, home location, and travel preferences.',
      },
      {
        q: 'How do I reset my password?',
        a: 'On the login screen, tap "Forgot password?" and enter your registered email. You\'ll receive a reset link within a few minutes.',
      },
      {
        q: 'Can I sign in with Google or Apple?',
        a: 'Yes. On the login or sign-up screen, select "Continue with Google" or "Continue with Apple". We receive only your name, email, and profile photo from those providers.',
      },
      {
        q: 'How do I delete my account?',
        a: 'Go to Settings → Account → Delete Account. Your data will be permanently deleted within 30 days as per our Privacy Policy. This action cannot be undone.',
      },
    ],
  },
  {
    category: 'App Features',
    items: [
      {
        q: 'How does itinerary generation work?',
        a: 'Tell Tripknot your destination, trip duration, and preferences. Our system builds a day-by-day itinerary with curated places, timings, and map-based directions — all personalised to how you travel.',
      },
      {
        q: 'What is "Strangers Trip"?',
        a: '"Strangers Trip" lets you join group trips with like-minded travellers you haven\'t met yet. Tripknot matches you based on travel style, destination, and dates.',
      },
      {
        q: 'Can I save and share itineraries?',
        a: 'Yes. Tap the bookmark icon on any itinerary to save it to your profile. Use the share button to send it via link, WhatsApp, or other apps.',
      },
      {
        q: 'How does the map discovery work?',
        a: 'With location permission, Tripknot shows nearby hidden gems, cafes, stays, and experiences on a live map. You can also explore any city without location access by searching manually.',
      },
    ],
  },
  {
    category: 'Privacy & Data',
    items: [
      {
        q: 'What personal data does Tripknot collect?',
        a: 'We collect the information needed to run your account and personalise your experience — such as your name, email, location (with consent), and usage activity. See our Privacy Policy for full details.',
      },
      {
        q: 'Does Tripknot sell my data?',
        a: 'No. Aneeras does not sell, rent, or trade your personal data to any third party, including for advertising purposes.',
      },
      {
        q: 'How do I download or delete my data?',
        a: 'You can request a copy of your data or ask for deletion by emailing support@aneeras.com. We will respond within 30 days in line with our Data Privacy Policy.',
      },
      {
        q: 'How do I turn off location tracking?',
        a: 'On iOS go to Settings → Privacy & Security → Location Services → Tripknot and set to "Never" or "While Using". On Android go to Settings → Apps → Tripknot → Permissions → Location.',
      },
    ],
  },
  {
    category: 'For Business Owners',
    items: [
      {
        q: 'How do I list my business on Tripknot?',
        a: 'Submit your business through the Tripknot operator portal. You\'ll need your business name, category, contact details, and proof of registration. Listings are reviewed before going live.',
      },
      {
        q: 'What are the subscription plans for operators?',
        a: 'We offer three plans: Starter (Free) for basic visibility, Essential (~₹1,499/month) for enhanced features and priority listing, and Growth (~₹2,499/month) for advanced tools and maximum visibility. All prices exclude GST.',
      },
      {
        q: 'How do I update or remove my listing?',
        a: 'Log in to the Tripknot Operator Dashboard to edit your listing details at any time. To remove your listing, email support@tripknot.in.',
      },
    ],
  },
];
