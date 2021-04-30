import React from "react";
class MultipleInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      date: "",
      file: "",
      read: "",
      textarea: "",
    };
  }
  render() {
    return (
      <>
        <div className="container">
          <form
            action=""
            className="w-2/5  mr-auto ml-auto bg-red-200 border-gray-500 p-4"
          >
            <label Htmlfor="" className="mt-8 block">
              {" "}
              Text Input{" "}
            </label>
            <input type="text" name="text" id="text" className="block w-full" />
            <label for="date" className="mt-8 block">
              Date Input
            </label>
            <input type="date" name="date" id="date" className="block w-full" />
            <label for="file" className="mt-8 block">
              File Input
            </label>
            <input type="file" name="file" id="file" className="block w-full" />
            <label for="readOnly" className="mt-8 block">
              Read-Only input
            </label>
            <input
              type="text"
              id="readOnly"
              className="block w-full"
              placeholder="This can only be copied"
              readOnly="true"
            />

            <label for="disableInput" className="mt-8 block">
              Disabled Input
            </label>
            <input
              type="text"
              id="disableInput"
              className="block w-full"
              disabled="true"
            />
            <label for="textarea" className="mt-8 block">
              Textarea
            </label>
            <textarea
              name="textarea"
              id="textarea"
              cols="10"
              rows="5"
              className="block w-full"
            ></textarea>
            <label for="disableTextarea" className="mt-8 block">
              Textarea
            </label>
            <textarea
              name="textarea"
              id="disableTextarea"
              cols="30"
              rows="5"
              className="block w-full"
              disabled="true"
            ></textarea>
          </form>
        </div>
      </>
    );
  }
}

export default MultipleInput;
