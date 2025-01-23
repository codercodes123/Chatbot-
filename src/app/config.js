// config.js
import { createChatBotMessage } from "react-chatbot-kit";

// Custom Styles
const customStyles = {
botMessageBox: {
backgroundColor: "#4FC3F7", // Example: a distinct blue
color: "white",          // White text for better contrast
borderRadius: "15px",
borderBottomLeftRadius: 0,
padding: "12px 16px",
margin: "10px 0",        // Consistent margin
boxShadow: "1px 1px 2px rgba(0, 0, 0, 0.1)",
maxWidth: '75%',
},
userMessageBox: {
backgroundColor: "#eee",
color: "#333",
borderRadius: "15px",
borderBottomRightRadius: 0,
padding: "12px 16px",
margin: "10px 0",       // Consistent margin
boxShadow: "1px 1px 2px rgba(0, 0, 0, 0.1)",
maxWidth: '75%',
alignSelf: 'flex-end',
},
chatButton: {
backgroundColor: "#29b6f6", // Example - distinct color
borderRadius: "24px",
color: "white",
padding: "12px 20px",
border: "none",
cursor: "pointer",
boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
transition: "all 0.3s ease", // Smooth transition for all properties

"&:hover": {
        backgroundColor: "#81d4fa", // Slightly different shade on hover
        transform: 'scale(1.05)'  // Slight scale-up effect
    },


    // Example loading state styles (when waiting for API response)
    '&.loading': {  // Assuming you add a "loading" class in your ActionProvider
        backgroundColor: "#a2d2ff", // Lighter color while loading
        cursor: 'wait',           // Change cursor to wait
        transform: 'none',
    },
},


chatContainer: {
    backgroundColor: 'transparent',
    maxWidth: '600px',
    padding: '20px',
    borderRadius: "20px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
    margin: "0px", // Remove default margin

},

inputField: {
    padding: '12px 16px',
    borderRadius: '24px', //Match send button's radius
    border: '1px solid #ccc',

    '&:focus': {
      outline: 'none',
      boxShadow: '0 0 5px rgba(0, 123, 255, 0.3)',
    }

},


chatHeader: { // Style the header (you'll add this in ChatComponent)
    backgroundColor: '#e3f2fd', // Example light blue header, match with bot message color
    color: "#2196F3",         // Example darker blue text. Make sure there is sufficient contrast.
    fontSize: '1.2rem',
    fontWeight: 'bold',
    padding: '10px',
    borderRadius: '10px 10px 0 0', // Rounded top corners only
    marginBottom: '10px',
    textAlign: 'center',

  },

};

// Initial Messages
const initialMessages = [
createChatBotMessage("Hello, I am BAYMAX, your Personal HealthCare Companion. How can I help you?",
{
withAvatar: true,
delay: 1000,
// widget: "quickOptions", // remove widget if it is not being used anywhere
}),
];

const config = {  // No changes needed here if you're handling the rest in ChatComponent

botName: "BAYMAX",
initialMessages,
customStyles,
// widgets, // Remove widgets if not used anywhere
state: {
thinking: false, // Or handle thinking state if needed.
},
customComponents: {
botAvatar: () => (
<div style={{ marginRight: "8px", display: 'flex', alignItems: 'center' }}>
<img src="/51037.png" alt="baymax" style={{ width: "40px", height: "40px" }} />
</div>
)
},

};

export default config;