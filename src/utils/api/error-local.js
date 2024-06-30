import { translateMessage } from "../strings";

export class ErrorLocal extends Error {
  constructor(message, options = {}) {
    super(message, options);
    this.message = translateMessage(message);
  }
}
