import {JsonProperty, JsonObject} from '../lib/tj.deserializer'

@JsonObject
export class add {
  @JsonProperty('productName', String, true)
  public productName: string = undefined;

  @JsonProperty('productPrice', Number, true)
  public productPrice: number = undefined;

  @JsonProperty('productDesc', String, true)
  public productDesc: string = undefined;

}