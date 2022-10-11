export class ServiceModel {
  id!: number;
  name!: string;
  type!: string;
  status!: string;
  nextduedate!: string;
  amount!: string;
  invoiceUrl?: string;
}
export class ServicesResponse{
  success!: boolean;
  data!: ServiceModel[];
  message!: string | null;
  errors!: any[] | null;
}