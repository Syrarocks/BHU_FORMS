import React, { useState } from "react";
import { Container, Segment, Menu, Grid } from "semantic-ui-react";
// Import the JSON data from totalforms.json
import jsonData from "./totalforms.json";

const Form = () => {
  const [activeItem, setActiveItem] = useState("Teaching Form");

  const handleItemClick = (e, { name }) => setActiveItem(name);

  const styles = {
    formContainer: {
      maxWidth: "600px",
      padding: "136px",
      textAlign: "left",
      marginLeft: "0px", // Keep left margin at 0
      marginTop: "-67px",
      marginRight: "auto",
      marginBottom: "0px", // Optional: adjust as needed
    },
    colorBlock: {
      width: "100%",
      height: "35px", // Height of the color blocks
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "0 10px", // Add padding for better spacing
      border: "1px solid #cfcdcd", // Add black border
      boxSizing: "border-box", // Ensure padding and border are included in the width/height
    },
    block1: { backgroundColor: "#D1CCE6aa" },
    block2: { backgroundColor: "#F7D1C5aa" },
    block3: { backgroundColor: "#B7DFF9aa" },
    block4: { backgroundColor: "#F7D8DCaa" },
    block5: { backgroundColor: "#EEDDF4aa" },
    block6: { backgroundColor: "#B8CDEBaa" },
    block7: { backgroundColor: "#F9C3A6aa" },
    block8: { backgroundColor: "#D4D4D4aa" },
  };

  // Create colorBlocks array based on the number of items in the jsonData
  const colorBlocks = jsonData.map((item, index) => ({
    id: index + 1,
    style: styles[`block${(index % 8) + 1}`], // Cycle through 8 blocks
    doc: item.doc,
    pdf: item.pdf,
    name: item.name,
  }));

  return (
    <Container style={styles.formContainer}>
      {/* Menu for navigating between forms */}
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

      {/* Render the selected form based on active menu item */}
      <Segment style={{ marginLeft: "0px" }}>
        {" "}
        {/* Add left margin to Segment */}
        {activeItem === "Teaching Form" && (
          <Grid>
            {colorBlocks.map((block) => (
              <Grid.Row key={block.id} width={4} style={{ padding: 0 }}>
                <div style={{ ...styles.colorBlock, ...block.style }}>
                  {/* Display the name from the JSON data */}
                  <span>{block.name}</span>
                  <div>
                    {/* Display document link */}
                    <a
                      href={block.doc}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Document
                    </a>
                    {" | "}
                    {/* Display PDF link */}
                    <a
                      href={block.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      PDF
                    </a>
                  </div>
                </div>
              </Grid.Row>
            ))}
          </Grid>
        )}
        {activeItem === "Non-Teaching Form" && (
          <Grid>
            {colorBlocks.map((block) => (
              <Grid.Row key={block.id} width={4} style={{ padding: 0 }}>
                <div style={{ ...styles.colorBlock, ...block.style }}>
                  {/* Display the name from the JSON data */}
                  <span>{block.name}</span>
                  <div>
                    {/* Display document link */}
                    <a
                      href={block.doc}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Document
                    </a>
                    {" | "}
                    {/* Display PDF link */}
                    <a
                      href={block.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      PDF
                    </a>
                  </div>
                </div>
              </Grid.Row>
            ))}
          </Grid>
        )}
        {activeItem === "Students Form" && (
          <Grid>
            {colorBlocks.map((block) => (
              <Grid.Row key={block.id} width={4} style={{ padding: 0 }}>
                <div style={{ ...styles.colorBlock, ...block.style }}>
                  {/* Display the name from the JSON data */}
                  <span>{block.name}</span>
                  <div>
                    {/* Display document link */}
                    <a
                      href={block.doc}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Document
                    </a>
                    {" | "}
                    {/* Display PDF link */}
                    <a
                      href={block.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      PDF
                    </a>
                  </div>
                </div>
              </Grid.Row>
            ))}
          </Grid>
        )}
      </Segment>
    </Container>
  );
};

export default Form;
