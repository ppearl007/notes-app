import { useState } from "react";
import ReactMde from "react-mde";
import Showdown from "showdown";
import PropTypes from "prop-types";

export default function Editor({ currentNote, updateNote }) {
  Editor.propTypes = {
    currentNote: PropTypes.object,
    updateNote: PropTypes.func.isRequired,
  };

  const [selectedTab, setSelectedTab] = useState("write");

  const converter = new Showdown.Converter({
    tables: true,
    simplifiedAutoLink: true,
    strikethrough: true,
    tasklists: true,
  });

  return (
    <section className="pane editor">
      <ReactMde
        value={currentNote.body}
        onChange={updateNote}
        selectedTab={selectedTab}
        onTabChange={setSelectedTab}
        generateMarkdownPreview={(markdown) =>
          Promise.resolve(converter.makeHtml(markdown))
        }
        minEditorHeight={80}
        heightUnits="vh"
      />
    </section>
  );
}
