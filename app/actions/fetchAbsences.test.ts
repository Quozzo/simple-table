import { fetchAbsences } from './fetchAbsences';

describe('fetchAbsences', () => {
  beforeEach(() => {
    global.fetch = jest.fn();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  
  it('should fetch absences successfully', async () => {
    const mockedData = [{ id: 1, employee: { firstName: 'John', lastName: 'Doe' }, startDate: '2021-01-01', type: 'ANNUAL_LEAVE', approved: true }];
    const mockResponse = {
      json: jest.fn().mockResolvedValue(mockedData),
    };
    (global.fetch as jest.Mock).mockResolvedValue(mockResponse);

    const result = await fetchAbsences();

    expect(global.fetch).toHaveBeenCalledWith('https://front-end-kata.brighthr.workers.dev/api/absences?');
    expect(result).toEqual(mockedData);
  });

});