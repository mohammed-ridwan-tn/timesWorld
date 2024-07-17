import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

 export const fetchCountries = createAsyncThunk('countries/fetchCountries', async () => {
  const response = await fetch('https://restcountries.com/v2/all?fields=name,region,flag');
  return response.json();
});

 const countriesSlice = createSlice({
  name: 'countries',
  initialState: {
    data: [],
    loading: false,
    error: null,
    activeTab: 'All',
  },
  reducers: {
    setActiveTab: (state, action) => {
      state.activeTab = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCountries.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCountries.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchCountries.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setActiveTab } = countriesSlice.actions;

export default countriesSlice.reducer;
