export class Signalement {
  id !: string;
  signalementId !: string;
  creationDate !: string;
  typeSignalementId !: string;
  typeSignalementName !: string;
  longitude !: number;
  latitude !: number;
  regionId !: number;
  regionName !: string;
  description!: string;
  customerId!: string;
  customerName!: string;
  curentStatus!: number;
}
