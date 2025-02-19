import { colors, styled, Typography } from '@mui/material';
import { Language } from '@/types/repos';
import { Paper } from '../Paper';

export const RepositoryContainer = styled('div')`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 150px;
  gap: 1rem;
`;

export const RepositoryItem = styled(Paper)`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

export const RepositoryLanguage = styled('div')`
  align-items: center;
  color: ${colors.grey[600]};
  display: flex;
  gap: 0.5rem;

  & > span + span {
    align-items: end;
    display: inline-flex;
  }
`;

const languageColors: { [key in Language | 'default']: string } = {
  JavaScript: '#f1e05a',
  Python: '#3572A5',
  Java: '#b07219',
  HTML: '#e34c26',
  CSS: '#563d7c',
  TypeScript: '#3178c6',
  PHP: '#4F5D95',
  Ruby: '#701516',
  C: '#555555',
  'C++': '#f34b7d',
  Go: '#00ADD8',
  Shell: '#89e051',
  Swift: '#ffac45',
  Kotlin: '#A97BFF',
  Rust: '#dea584',
  Dart: '#00c4b3',
  default: '#cccccc',
};

export const Dot = styled('span')<{ language: Language }>`
  border-radius: 50%;
  height: 10px;
  width: 10px;
  background-color: ${({ language }) => languageColors[language] || languageColors.default};
`;

export const Description = styled(Typography)`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;
