
# ROI Calculator for Marketing Consultants

This project is a web-based ROI (Return on Investment) calculator designed for marketing consultants. It allows users to input key marketing metrics (ad spend, conversion rate, and average deal size) and calculates the ROI of their marketing campaigns. The calculator also includes features to save results as a PDF and to contact the business with the calculated results.

![Screenshot of ROI Calculator](images/result_screenshot.PNG)

## Features

- **ROI Calculation**: Calculate ROI based on ad spend, conversion rate, and average deal size.
- **PDF Export**: Save the calculated ROI results as a PDF document (feature implementation in progress).
- **Contact Business**: Users can send their calculated results and a custom message directly to the business for follow-up (feature implementation in progress).

## Technology Stack

- **Node.js**: Backend runtime environment.
- **Express.js**: Web framework for Node.js to handle routing and serving static files.
- **EJS**: Templating engine used to generate HTML dynamically.
- **JavaScript (Vanilla)**: Used for the front-end logic to handle calculations and user interactions.
- **CSS**: Used for styling the web page.
  
## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14.x or above)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/toddbrannon/ROI_Calculator.git
   cd ROI_Calculator
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Start the application:

   ```bash
   node app.js
   ```

4. Open your browser and navigate to `http://localhost:3000` to use the ROI Calculator.

## How to Use

1. Enter your **Ad Spend** (in USD).
2. Enter your **Conversion Rate** (percentage).
3. Enter your **Average Deal Size** (in USD).
4. Click **Calculate ROI** to get the result.
5. Optionally, click **Save as PDF** to download the results (implementation pending).
6. Optionally, click **Contact Us** to send your results and a message to the business (implementation pending).

## Project Structure

```bash
ROI_Calculator/
│
├── public/               # Static files (CSS, JavaScript)
│   ├── css/
│   │   └── styles.css    # Styles for the calculator
│   └── js/
│       └── scripts.js    # JavaScript for ROI calculation
│
├── views/                # EJS templates
│   └── index.ejs         # Main page template
│
└── app.js                # Express server setup
```

## Future Enhancements

- **PDF Export**: Complete the implementation to allow users to download the ROI results as a PDF file.
- **Contact Form**: Implement a contact form that sends the calculated ROI and user message directly to the consultant via email or CRM integration.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any inquiries or issues, please reach out to Todd Brannon at todd@toddbrannon.com.
