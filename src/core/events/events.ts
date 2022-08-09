import EventEmitter from 'events';
import * as fbemitter from 'fbemitter'
import { EventType } from './type';


const emitter: EventEmitter = new fbemitter.EventEmitter();


emitter.addListener('newEvent', newEventHandler)

export function $broadcast (eventName: EventType) {
  emitter.emit(eventName)
}

export const appEmitter = emitter

function newEventHandler(...logAttributes) {
  console.log(logAttributes)
}

