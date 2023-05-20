import { LinkIcon } from '@chakra-ui/icons';
import {
  Box,
  Heading,
  Icon,
  Link,
  Stack,
  Text,
} from '@chakra-ui/react';
import { FeatureProps } from './types';

export const Product = ({ title, text, href }: FeatureProps) => {
  return (
    <Link href={href} target="_blank" _hover={{ textDecoration: 'none' }}>
      <Stack>
        <Heading fontSize="xl">{title}&ensp;&rarr;</Heading>
        <Text>{text}</Text>
      </Stack>
    </Link>
  );
};

export const Dependency = ({ title, text, href }: FeatureProps) => {
  return (
    <Link href={href} target="_blank" _hover={{ textDecoration: 'none' }}>
      <Stack
        isInline={true}
        key={title}
        spacing={3}
        h="full"
        p={4}
        justifyContent="center"
        borderRadius="md"
        border="1px solid"
      >
        <Box>
          <Icon as={LinkIcon} />
        </Box>
        <Stack spacing={1}>
          <Text fontSize="lg" fontWeight="semibold">
            {title}
          </Text>
          <Text
            lineHeight="short"
          >
            {text}
          </Text>
        </Stack>
      </Stack>
    </Link>
  );
};
