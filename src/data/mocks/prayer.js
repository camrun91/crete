export default {
  id: 1,
  firstName: 'Isaac',
  lastName: 'Hardy',
  text: 'Pray this works.',
  answer: 'This is the answer',
  requestedByPersonAliasId: 447217,
  enteredDateTime: '2019-07-02T13:08:02.035',
  campusId: 16,
  categoryId: 2,
  flagCount: 0,
  prayerCount: 4,
  isPublic: true,
};

export const twoRockPrayers = [
  {
    id: 1,
    firstName: 'Isaac',
    lastName: 'Hardy',
    text: 'Pray this works.',
    requestedByPersonAliasId: 447217,
    enteredDateTime: '2019-07-02T13:08:02.035',
    campusId: 16,
    categoryId: 2,
    flagCount: 0,
    prayerCount: 4,
    isPublic: true,
  },
  {
    id: 2,
    firstName: 'Rich',
    lastName: 'Dubee',
    text: 'Help me',
    requestedByPersonAliasId: 447217,
    enteredDateTime: '2019-07-03T13:08:02.035',
    campusId: null,
    categoryId: 2,
    flagCount: 1,
    prayerCount: 0,
    isPublic: false,
  },
];

export const threeUnsortedPrayers = [
  {
    text: 'prayer1',
    prayerCount: 2,
    createdDateTime: '2019-05-30T09:41:44.607',
  },
  {
    text: 'prayer2',
    prayerCount: 2,
    createdDateTime: '2019-05-29T09:41:44.607',
  },
  {
    text: 'prayer3',
    prayerCount: 1,
    createdDateTime: '2019-05-30T09:41:44.607',
  },
];

export const threeSortedPrayers = [
  {
    text: 'prayer3',
    prayerCount: 1,
    createdDateTime: '2019-05-30T09:41:44.607',
  },
  {
    text: 'prayer2',
    prayerCount: 2,
    createdDateTime: '2019-05-29T09:41:44.607',
  },
  {
    text: 'prayer1',
    prayerCount: 2,
    createdDateTime: '2019-05-30T09:41:44.607',
  },
];

export const menuCategories = [
  {
    id: 1,
    key: 'campus',
    attributeValues: { requiresCampusMembership: { value: 'True' } },
  },
  {
    id: 2,
    key: 'community',
    attributeValues: { requiresCampusMembership: { value: 'False' } },
  },
];
