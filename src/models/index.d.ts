import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type HotelMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Hotel {
  readonly id: string;
  readonly name?: string;
  readonly image?: string;
  readonly price?: number;
  readonly rating?: number;
  readonly address?: string;
  readonly location?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Hotel, HotelMetaData>);
  static copyOf(source: Hotel, mutator: (draft: MutableModel<Hotel, HotelMetaData>) => MutableModel<Hotel, HotelMetaData> | void): Hotel;
}