import { Injectable } from '@angular/core';

interface logMessages {
  person: string,
  message: string,
  createdAt: any
}

@Injectable()
export class AccessControlLogService {

	successLogin: boolean = false
	logMessagesArray: Array<logMessages> = []
	
	constructor() { }

  getAccessLog(): Array<logMessages> {
		return this.logMessagesArray
  }

  addAccessItem(person: string, message: string) {
		this.successLogin = !this.successLogin
		this.logMessagesArray.push({ person, message, createdAt: Date.now() })
  }

}
