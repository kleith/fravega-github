import { colors, Link as LinkMui, LinkProps } from '@mui/material';

export const Link: React.FC<LinkProps> = ({ href, children, ...props }) => {
  const formattedUrl =
    href?.startsWith('http://') || href?.startsWith('https://') ? href : `https://${href}`;

  return (
    <LinkMui
      color={colors.blue[600]}
      href={formattedUrl}
      underline="hover"
      rel="noopener noreferrer"
      {...props}
    >
      {children}
    </LinkMui>
  );
};
