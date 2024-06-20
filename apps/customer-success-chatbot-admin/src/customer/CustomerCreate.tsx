import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { SupportTicketTitle } from "../supportTicket/SupportTicketTitle";

export const CustomerCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="email" source="email" type="email" />
        <NumberInput
          step={1}
          label="InternalCustomerId"
          source="internalCustomerId"
        />
        <TextInput label="name" source="name" />
        <TextInput label="phoneNumber" source="phoneNumber" />
        <ReferenceArrayInput
          source="supportTickets"
          reference="SupportTicket"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SupportTicketTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
