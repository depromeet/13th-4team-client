import { SpellCheckData } from './question';

export interface QuestionState {
  title: string;
  answer: string;
  isSpellCheckMode: boolean;
  spellErrors: SpellCheckData[];
}

export interface QuestionActions {
  setTitle: (title: QuestionState['title']) => void;
  setAnswer: (answer: QuestionState['answer']) => void;
  setIsSpellCheckMode: (isSpellCheckMode: QuestionState['isSpellCheckMode']) => void;
  setSpellErrors: (spellErrors: QuestionState['spellErrors']) => void;
}

export interface QuestionStore extends QuestionState {
  actions: QuestionActions;
}

export interface ExperienceState {
  capabilityKeyword: string;
}

export interface ExperienceActions {
  setCapabilityKeyword: (capabilityKeyword: ExperienceState['capabilityKeyword']) => void;
}

export interface ExperienceStore extends ExperienceState {
  actions: ExperienceActions;
}
