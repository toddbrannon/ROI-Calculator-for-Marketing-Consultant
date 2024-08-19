function calculateROI() {
    const adSpend = parseFloat(document.getElementById('adSpend').value);
    const conversionRate = parseFloat(document.getElementById('conversionRate').value);
    const averageDeal = parseFloat(document.getElementById('averageDeal').value);

    // ROI formula: (Revenue - Ad Spend) / Ad Spend * 100%
    const revenue = (conversionRate / 100) * adSpend * averageDeal;
    const roi = ((revenue - adSpend) / adSpend) * 100;

    document.getElementById('roiValue').textContent = roi.toFixed(2) + '%';
    document.getElementById('result').style.display = 'block';
}

document.getElementById('savePdf').addEventListener('click', () => {
    // Logic for saving results as PDF
    alert('Save as PDF functionality coming soon!');
});

document.getElementById('contactButton').addEventListener('click', () => {
    // Logic for contacting business with the results
    alert('Contact Us functionality coming soon!');
});
