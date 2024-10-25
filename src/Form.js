import React, { useState } from "react";
import { Segment, Menu, Grid } from "semantic-ui-react";
import jsonData from "./totalforms.json";

const Form = () => {
  const [activeItem, setActiveItem] = useState("Teaching Form");
  const [selectedDocument, setSelectedDocument] = useState(null);

  const handleItemClick = (e, { name }) => setActiveItem(name);
  const handleLinkClick = (link) => setSelectedDocument(link);

  const styles = {
    bigContainer: {
      padding: "20px",
      maxWidth: "1660px",
      margin: "auto",
      height: "85vh",
      display: "flex",
    },
    formContainer: {
      width: "900px",
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
      height: "100%",
      border: "none",
    },
  };

  const colorBlocks = jsonData.map((item, index) => ({
    id: index + 1,
    style: styles[`block${(index % 8) + 1}`],
    doc: item.doc,
    pdf: item.pdf,
    name: item.name,
  }));

  return (
    <Segment style={styles.bigContainer}>
      {/* Left container for form navigation */}
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
                  <a href="#" onClick={() => handleLinkClick(block.doc)}>
                    Document
                  </a>
                  {" | "}
                  <a href="#" onClick={() => handleLinkClick(block.pdf)}>
                    PDF
                  </a>
                </div>
              </div>
            </Grid.Row>
          ))}
        </div>
      </div>

      {/* Right container for PDF viewer */}
      <div style={{ flex: 2, height: "95%" }}>
        {selectedDocument ? (
          <iframe
            src={selectedDocument}
            title="Document Viewer"
            style={styles.iframe}
          />
        ) : (
          <p>Select a document to view here.</p>
        )}
      </div>
    </Segment>
  );
};

export default Form;
