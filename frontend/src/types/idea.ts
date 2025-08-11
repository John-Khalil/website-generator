export interface Section {
  title: string;
  content: string;
}

export interface Idea {
  _id: string;
  idea: string;
  sections: Section[];
  createdAt: string;
}

export interface CreateIdeaRequest {
  idea: string;
}

export interface CreateIdeaResponse {
  _id: string;
  idea: string;
  sections: Section[];
  createdAt: string;
}
