import React from "react";
import {
  InputGroup,
  DropdownButton,
  Dropdown,
  FormControl,
  Form,
  Button  
} from "react-bootstrap";
import { useState } from "react";

export default function DropdownNav(props) {
  const [input, setInput] = useState(0);
  const changeInput = (e) => {
    setInput(e.target.value);
  };

  return (
    <div>
      <Form.Label htmlFor="basic-url">{props.InputLabel}</Form.Label>
      <InputGroup className="mb-4">
        <FormControl
          placeholder="0.0"
          aria-label=""
          aria-describedby="basic-addon2"
          value={input}
        />
        <Button variant="danger" id="button-addon2">
          {props.ButtunName}
        </Button>
      </InputGroup>
    </div>
  );
}
