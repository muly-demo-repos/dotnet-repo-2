/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { SupportTicketWhereUniqueInput } from "../../supportTicket/base/SupportTicketWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class SupportTicketUpdateManyWithoutSupportAgentsInput {
  @Field(() => [SupportTicketWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [SupportTicketWhereUniqueInput],
  })
  connect?: Array<SupportTicketWhereUniqueInput>;

  @Field(() => [SupportTicketWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [SupportTicketWhereUniqueInput],
  })
  disconnect?: Array<SupportTicketWhereUniqueInput>;

  @Field(() => [SupportTicketWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [SupportTicketWhereUniqueInput],
  })
  set?: Array<SupportTicketWhereUniqueInput>;
}

export { SupportTicketUpdateManyWithoutSupportAgentsInput as SupportTicketUpdateManyWithoutSupportAgentsInput };
