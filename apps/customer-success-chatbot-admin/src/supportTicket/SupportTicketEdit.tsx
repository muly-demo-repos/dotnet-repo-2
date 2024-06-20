import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { CustomerTitle } from "../customer/CustomerTitle";

export const SupportTicketEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="AssignedAgent" source="assignedAgent" />
        <ReferenceInput
          source="customer.id"
          reference="Customer"
          label="Customer"
        >
          <SelectInput optionText={CustomerTitle} />
        </ReferenceInput>
        <TextInput label="description" multiline source="description" />
        <TextInput label="status" source="status" />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Edit>
  );
};
