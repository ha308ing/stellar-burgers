import { translateMessage } from "../strings";

export class ErrorLocal extends Error {
  constructor(message: string, options: ErrorOptions = {}) {
    super(message, options);
    this.message = translateMessage(message);
  }
}
