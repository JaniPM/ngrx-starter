import { Injectable } from '@angular/core';

/**
 * Service to manage session- and localStorage data
 */

@Injectable({
  providedIn: 'root'
})
export class WebStorageService {

  constructor() { }

  setSessionStorageItem(key: string, value: any) {
    sessionStorage.setItem(key, JSON.stringify(value));
  }

  getSessionStorageItem(key: string) {
    const value = sessionStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  }

  removeSessionStorageItem(key: string) {
    sessionStorage.removeItem(key);
  }

  clearSessionStorageItems() {
    sessionStorage.clear();
  }

  setLocalStorageItem(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  getLocalStorageItem(key: string) {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  }

  removeLocalStorageItem(key: string) {
    localStorage.removeItem(key);
  }

  clearLocalStorageItems() {
    localStorage.clear();
  }
}
