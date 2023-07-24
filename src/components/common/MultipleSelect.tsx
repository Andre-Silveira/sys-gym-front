
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import OutlinedInput from '@mui/material/OutlinedInput';
import Select from '@mui/material/Select';
import * as React from 'react';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

type tipo = {
  id: number
  name: string
  slug: string
  type: string
  locale: string
  created_at: string
  updated_at: string
}

const variants:Array<any> = [
  {
    id: 3,
    name: 'Voucher',
    slug: 'voucher',
    type: 'Main',
    locale: 'en',
    created_at: '2021-11-15T08:27:23.000Z',
    updated_at: '2021-11-15T08:27:23.000Z'
  },
  {
    id: 1,
    name: 'Top Up',
    slug: 'top-up',
    type: 'Main',
    locale: 'en',
    created_at: '2021-11-15T08:26:44.000Z',
    updated_at: '2021-11-15T08:26:44.000Z'
  },
  {
    id: 2,
    name: 'Game Key',
    slug: 'game-key',
    type: 'Main',
    locale: 'en',
    created_at: '2021-11-15T08:27:03.000Z',
    updated_at: '2021-11-15T08:27:03.000Z'
  },
  {
    id: 12,
    name: 'Other',
    slug: 'other',
    type: 'SubMain',
    locale: 'en',
    created_at: '2021-11-15T08:30:50.000Z',
    updated_at: '2021-11-15T08:30:50.000Z'
  },
  {
    id: 11,
    name: 'Nintendo',
    slug: 'nintendo',
    type: 'SubMain',
    locale: 'en',
    created_at: '2021-11-15T08:30:22.000Z',
    updated_at: '2021-11-15T08:30:22.000Z'
  },
  {
    id: 10,
    name: 'Xbox',
    slug: 'xbox',
    type: 'SubMain',
    locale: 'en',
    created_at: '2021-11-15T08:30:08.000Z',
    updated_at: '2021-11-15T08:30:08.000Z'
  },
];

const MultipleSelect = () => {
  const [variantName, setVariantName] = React.useState<Array<tipo>>([]);

  const handleChange = (event:any) => {
    const {
      target: { value },
    } = event;

    setVariantName(typeof value === 'string'
    ? value.split(',')
    : value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-checkbox-label">Tag</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={variantName}
          onChange={handleChange}
          input={<OutlinedInput label="Tag" />}
          renderValue={(selected) => selected.map((x) => x.name).join(', ')}
          MenuProps={MenuProps}
        >
          {variants.map((variant) => (
            <MenuItem key={variant.id} value={variant}>
              <Checkbox
                checked={
                  variantName.findIndex((item) => item.id === variant.id) >= 0
                }
              />
              <ListItemText primary={variant.name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

export default MultipleSelect;