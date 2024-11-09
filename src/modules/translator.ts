import { Linyu } from "./linyu";

export default function Translator() {
  return {
    originalText: '',
    translatedText: '',
    translate() {
      this.translatedText = Linyu.translate(this.originalText);
    }
  };
}