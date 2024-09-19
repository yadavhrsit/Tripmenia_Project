const pdfMake = require("pdfmake/build/pdfmake");
const pdfFonts = require("pdfmake/build/vfs_fonts");
const fs = require("fs");
const path = require("path");

// Register the built-in fonts
pdfMake.vfs = pdfFonts.pdfMake.vfs;

// /**
//  * Generate a PDF receipt with given data.
//  *
//  * @param {Object} options - The data to include in the PDF.
//  * @param {string} options.logoPath - The path to the logo image.
//  * @param {string} options.invoiceNo - The invoice number.
//  * @param {string} options.invoiceDate - The invoice date.
//  * @param {string} options.billedBy - The billed by details.
//  * @param {string} options.billedTo - The billed to details.
//  * @param {Array<Object>} options.items - The items to include in the table.
//  * @param {string} options.totalAmount - The total amount.
//  * @param {string} options.contactInfo - The contact information.
//  * @returns {Promise<string>} - The path to the generated PDF.
//  */
function generatePDFReceipt({
  logoPath,
  invoiceNo,
  invoiceDate,
  billedBy,
  billedTo,
  items,
  totalAmount,
  contactInfo,
}) {
  console.log(invoiceNo);
  console.log(invoiceDate);
  return new Promise((resolve, reject) => {
    // Convert the image to a Base64 string
    const imageBase64 = fs.readFileSync(logoPath).toString("base64");
    const imageDataUrl = `data:image/png;base64,${imageBase64}`;

    // Define the document content
    const docDefinition = {
      content: [
        // First Row with Logo and Invoice Text
        {
          table: {
            widths: [90, "*", "*", "*", "*"],
            body: [
              [
                {
                  image: imageDataUrl,
                  width: 90,
                  height: 28,
                  border: [false, false, false, false],
                },
                { text: "", border: [false, false, false, false] },
                { text: "", border: [false, false, false, false] },
                { text: "", border: [false, false, false, false] },
                {
                  text: "Invoice",
                  alignment: "right",
                  style: "header",
                  border: [false, false, false, false],
                },
              ],
            ],
          },
          layout: {
            defaultBorder: false,
          },
        },
        // Second Row with Invoice Details
        {
          style: "tableExample",
          table: {
            widths: [100, "*", "*"],
            body: [
              [
                {
                  stack: [
                    { text: "Invoice No #", bold: true },
                    { text: invoiceNo },
                    { text: "Invoice Date", bold: true },
                    { text: invoiceDate },
                  ],
                  border: [true, true, true, true],
                  margin: [5, 5],
                },
                {
                  stack: [
                    { text: "Billed By", bold: true },
                    { text: billedBy },
                  ],
                  border: [true, true, true, true],
                  margin: [5, 5],
                },
                {
                  stack: [
                    { text: "Billed To", bold: true },
                    { text: billedTo },
                  ],
                  border: [true, true, true, true],
                  margin: [5, 5],
                },
              ],
            ],
          },
          layout: {
            defaultBorder: false,
            hLineWidth: () => 1,
            vLineWidth: () => 1,
            hLineColor: "#000000",
            vLineColor: "#000000",
            paddingLeft: (i) => 4,
            paddingRight: (i) => 4,
            paddingTop: (i) => 4,
            paddingBottom: (i) => 4,
          },
        },
        // Third Row with Table Header
        {
          style: "tableExample",
          table: {
            widths: [20, "*", "*", "*", "*"],
            body: [
              [
                { text: " ", border: [true, true, true, true] },
                { text: "Item", bold: true, border: [true, true, true, true] },
                {
                  text: "Quantity",
                  bold: true,
                  border: [true, true, true, true],
                },
                { text: "Rate", bold: true, border: [true, true, true, true] },
                {
                  text: "Amount",
                  bold: true,
                  border: [true, true, true, true],
                },
              ],
            ],
          },
          layout: {
            hLineWidth: () => 1,
            vLineWidth: () => 1,
            hLineColor: "#000000",
            vLineColor: "#000000",
            paddingLeft: (i) => 4,
            paddingRight: (i) => 4,
            paddingTop: (i) => 4,
            paddingBottom: (i) => 4,
          },
        },
        // Fourth Row with Item Details
        {
          style: "tableExample",
          table: {
            widths: [20, "*", "*", "*", "*"],
            body: [
              ...items.map((item) => [
                { text: item.id, border: [true, true, true, true] },
                { text: item.description, border: [true, true, true, true] },
                { text: item.quantity, border: [true, true, true, true] },
                { text: item.rate, border: [true, true, true, true] },
                { text: item.amount, border: [true, true, true, true] },
              ]),
            ],
          },
          layout: {
            hLineWidth: () => 1,
            vLineWidth: () => 1,
            hLineColor: "#000000",
            vLineColor: "#000000",
            paddingLeft: (i) => 4,
            paddingRight: (i) => 4,
            paddingTop: (i) => 4,
            paddingBottom: (i) => 4,
          },
        },
        // Fifth Row with Total Amount
        {
          style: "tableExample",
          table: {
            widths: [20, "*", "*"],
            body: [
              [
                { text: " ", border: [true, true, true, true] },
                {
                  text: "Total (AED)",
                  bold: true,
                  border: [true, true, true, true],
                },
                { text: totalAmount, border: [true, true, true, true] },
              ],
            ],
          },
          layout: {
            hLineWidth: () => 1,
            vLineWidth: () => 1,
            hLineColor: "#000000",
            vLineColor: "#000000",
            paddingLeft: (i) => 4,
            paddingRight: (i) => 4,
            paddingTop: (i) => 4,
            paddingBottom: (i) => 4,
          },
        },
        // Sixth Row with Contact Information
        {
          text: contactInfo,
          margin: [0, 20, 0, 0],
          alignment: "center",
          fontSize: 12,
        },
      ],
      styles: {
        header: {
          fontSize: 18,
          bold: true,
        },
        tableExample: {
          margin: [0, 5, 0, 5],
        },
      },
    };

    // Create and write the PDF
    const pdfPath = path.join(__dirname, "receipt.pdf");
    const pdfDoc = pdfMake.createPdf(docDefinition);

    pdfDoc.getBuffer((buffer) => {
      fs.writeFileSync(pdfPath, buffer);
      resolve(pdfPath);
    });
  });
}

module.exports = { generatePDFReceipt };
