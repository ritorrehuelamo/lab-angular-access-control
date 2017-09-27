import { Injectable } from '@angular/core';

interface logMessages {
  person: string,
  message: string,
  createdAt: Date
}

@Injectable()
export class AccessControlLogService {

	logMessagesArray: Array<logMessages> = []

	constructor() { }

  getAccessLog(): Array<logMessages> {
		return this.logMessagesArray
  }

  addAccessItem(person: string, message: string) {

  }

}