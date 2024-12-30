import React, { useState } from "react";
import { Segment, Menu, Grid } from "semantic-ui-react";
import totalForms from "./totalforms.json";

const Form = () => {
  const [activeItem, setActiveItem] = useState("Teaching Form");
  const [selectedDocument, setSelectedDocument] = useState(null);

  const handleItemClick = (e, { name }) => {
    setActiveItem(name);
    setSelectedDocument(null); // Close the currently open PDF
  };

  const handlePDFClick = (pdfLink) => setSelectedDocument(pdfLink);
  const handleCloseViewer = () => setSelectedDocument(null);

  const styles = {
    bigContainer: {
      padding: "20px",
      maxWidth: "1660px",
      margin: "130px auto",
      height: "280vh",
      display: "flex",
    },
    formContainer: {
      width: "700px",
      padding: "20px",
      textAlign: "left",
      marginRight: "20px",
    },
    colorBlock: {
      width: "100%",
      height: "35px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "0 10px",
      border: "1px solid #cfcdcd",
      boxSizing: "border-box",
    },
    block1: { backgroundColor: "#D1CCE6aa" },
    block2: { backgroundColor: "#F7D1C5aa" },
    block3: { backgroundColor: "#B7DFF9aa" },
    block4: { backgroundColor: "#F7D8DCaa" },
    block5: { backgroundColor: "#EEDDF4aa" },
    block6: { backgroundColor: "#B8CDEBaa" },
    block7: { backgroundColor: "#F9C3A6aa" },
    block8: { backgroundColor: "#D4D4D4aa" },
    iframe: {
      width: "100%",
      height: "50%", // Adjusted height for the iframe to make it shorter
      border: "1px solid #000",
      marginTop: "18px",
    },
    viewerContainer: {
      position: "relative",
      width: "100%",
      height: "80%", // Reduced height of the PDF viewer
    },
    closeButton: {
      position: "absolute",
      top: "-16px",
      right: "-17px",
      backgroundColor: "#f44336",
      color: "#fff",
      border: "none",
      borderRadius: "50%",
      width: "30px",
      height: "30px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      cursor: "pointer",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
    },
    closeIcon: {
      fontSize: "16px",
      fontWeight: "bold",
      lineHeight: "16px",
    },
  };

  // Filter forms based on activeItem category
  const filteredForms = totalForms
    .filter((form) => form.pdf)
    .filter((form) => {
      if (activeItem === "Teaching Form") return form.category === "Teaching";
      if (activeItem === "Non-Teaching Form")
        return form.category === "Non-Teaching";
      if (activeItem === "Students Form") return form.category === "Student";
      return false;
    });

  const colorBlocks = filteredForms.map((item, index) => ({
    id: item.id,
    name: item.name,
    style: styles[`block${(index % 8) + 1}`],
    doc: item.doc,
    pdf: item.pdf,
  }));

  return (
    <Segment style={styles.bigContainer}>
      <div style={styles.formContainer}>
        <Menu pointing>
          <Menu.Item
            name="Teaching Form"
            active={activeItem === "Teaching Form"}
            onClick={handleItemClick}
          />
          <Menu.Item
            name="Non-Teaching Form"
            active={activeItem === "Non-Teaching Form"}
            onClick={handleItemClick}
          />
          <Menu.Item
            name="Students Form"
            active={activeItem === "Students Form"}
            onClick={handleItemClick}
          />
        </Menu>

        <div>
          {colorBlocks.map((block) => (
            <Grid.Row key={block.id} width={4} style={{ padding: 0 }}>
              <div style={{ ...styles.colorBlock, ...block.style }}>
                <span>{block.name}</span>
                <div>
                  {block.doc && (
                    <>
                      <a
                        href={block.doc}
                        download
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Document
                      </a>
                      {" | "}
                    </>
                  )}
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      handlePDFClick(block.pdf);
                    }}
                  >
                    PDF
                  </a>
                </div>
              </div>
            </Grid.Row>
          ))}
        </div>
      </div>

      <div style={{ flex: 2, height: "80%" }}>
        {" "}
        {/* Adjusted height here */}
        {selectedDocument ? (
          <div style={styles.viewerContainer}>
            <button
              style={styles.closeButton}
              onClick={handleCloseViewer}
              title="Close Viewer"
            >
              <span style={styles.closeIcon}>×</span>
            </button>
            <iframe
              src={selectedDocument}
              title="Document Viewer"
              style={styles.iframe}
            />
          </div>
        ) : (
          <p>Select a PDF to view here.</p>
        )}
      </div>
    </Segment>
  );
};

export default Form;
