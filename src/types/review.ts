export interface ReviewerInfo {
  companyName: string;
  country: string;
  industry: string;
  role: string;
  relationship: string;
  duration: string;
  logoUrl?: string;
}

export interface ProblemSolution {
  challenge: string;
  effectiveness: string;
}

export interface ExecutionOperational {
  reliability: string;
  professionalism: string;
  communication: string;
}

export interface ValueCreation {
  tangibleResults: string;
}

export interface ScalabilityTrust {
  scalability: string;
  longTermTrust: string;
}

export interface Endorsement {
  recommendationText: string;
}

export interface StarRatings {
  execution: number;
  professionalism: number;
  communication: number;
  valueCreation: number;
  trust: number;
  scalability: number;
}

export interface Review {
  id: string;
  reviewerInfo: ReviewerInfo;
  problemSolution: ProblemSolution;
  executionOperational: ExecutionOperational;
  valueCreation: ValueCreation;
  scalabilityTrust: ScalabilityTrust;
  endorsement: Endorsement;
  starRatings: StarRatings;
  submittedAt: string;
}

export interface ReviewFormData {
  reviewerInfo: Partial<ReviewerInfo>;
  problemSolution: Partial<ProblemSolution>;
  executionOperational: Partial<ExecutionOperational>;
  valueCreation: Partial<ValueCreation>;
  scalabilityTrust: Partial<ScalabilityTrust>;
  endorsement: Partial<Endorsement>;
  starRatings: Partial<StarRatings>;
}
