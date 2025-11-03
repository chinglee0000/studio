import type { QuestType, QuestStatus, SubmissionStatus } from './constants'

export type User = {
  id: string;
  email: string;
  displayName: string | null;
  photoURL: string | null;
  humanityIndex: number;
  twinMatrixSummary: Record<string, any>;
};

export type Quest = {
  id: string;
  title: string;
  description: string;
  questType: QuestType;
  reward: {
    twin3: number;
  };
  status: QuestStatus;
  participants: {
    current: number;
    max: number;
  };
  deadline: Date;
  targetAudience: {
    ageRange: [number, number];
    location: string[];
    interests: string[];
  };
  creatorId: string;
};

export type Submission = {
  id: string;
  questId: string;
  userId: string;
  status: SubmissionStatus;
  content: Record<string, any>;
  submittedAt: Date;
};
