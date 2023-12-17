/*
 * Copyright (C), 2023 Codex Microsystems. Some rights reserved. This work is
 * licensed under the terms of the MIT license which can be found in the
 * root directory of this project.
 */

import { Flex, Text, Button } from '@radix-ui/themes';

export default function Page() {
  return (
    <Flex direction="column" gap="2">
      <Text>Hello from Radix Themes :)</Text>
      <Button>Let's go</Button>
    </Flex>
  );

}