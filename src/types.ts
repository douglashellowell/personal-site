export type Fact = {
  title: string;
  snippet: string;
  description: string;
};

export type TechFact = {
  tech: string;
  facts: Fact[];
};
