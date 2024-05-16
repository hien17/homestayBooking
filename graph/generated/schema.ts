// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal,
} from "@graphprotocol/graph-ts";

export class Token extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Token entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Token must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`,
      );
      store.set("Token", id.toString(), this);
    }
  }

  static loadInBlock(id: string): Token | null {
    return changetype<Token | null>(store.get_in_block("Token", id));
  }

  static load(id: string): Token | null {
    return changetype<Token | null>(store.get("Token", id));
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get roomId(): BigInt | null {
    let value = this.get("roomId");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set roomId(value: BigInt | null) {
    if (!value) {
      this.unset("roomId");
    } else {
      this.set("roomId", Value.fromBigInt(<BigInt>value));
    }
  }

  get provider(): Bytes | null {
    let value = this.get("provider");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set provider(value: Bytes | null) {
    if (!value) {
      this.unset("provider");
    } else {
      this.set("provider", Value.fromBytes(<Bytes>value));
    }
  }

  get renter(): Bytes | null {
    let value = this.get("renter");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set renter(value: Bytes | null) {
    if (!value) {
      this.unset("renter");
    } else {
      this.set("renter", Value.fromBytes(<Bytes>value));
    }
  }

  get approved(): boolean {
    let value = this.get("approved");
    if (!value || value.kind == ValueKind.NULL) {
      return false;
    } else {
      return value.toBoolean();
    }
  }

  set approved(value: boolean) {
    this.set("approved", Value.fromBoolean(value));
  }

  get tokenId(): BigInt {
    let value = this.get("tokenId");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set tokenId(value: BigInt) {
    this.set("tokenId", Value.fromBigInt(value));
  }

  get owner(): Bytes | null {
    let value = this.get("owner");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set owner(value: Bytes | null) {
    if (!value) {
      this.unset("owner");
    } else {
      this.set("owner", Value.fromBytes(<Bytes>value));
    }
  }

  get creator(): Bytes | null {
    let value = this.get("creator");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set creator(value: Bytes | null) {
    if (!value) {
      this.unset("creator");
    } else {
      this.set("creator", Value.fromBytes(<Bytes>value));
    }
  }

  get price(): BigInt | null {
    let value = this.get("price");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set price(value: BigInt | null) {
    if (!value) {
      this.unset("price");
    } else {
      this.set("price", Value.fromBigInt(<BigInt>value));
    }
  }
}
