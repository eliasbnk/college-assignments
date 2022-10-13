import React from 'react';
import type { FC, ReactNode } from 'react';
import { Checkbox } from 'semantic-ui-react';

const CheckboxLabel: FC<{ checked: boolean; children: ReactNode }> = ({ checked, children }) => (
  <Checkbox {...(checked ? { checked: true } : null)} label={children} />
);

export default CheckboxLabel;
