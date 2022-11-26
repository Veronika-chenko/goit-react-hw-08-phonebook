<!-- Уствновить -->

<!-- -react-router-dom.  -->
<!-- redux-persist -->
<!-- -prop-types? -->
<!-- <Toaster /> -->
<!-- react-hook-form -->

<!-- ліба стилізації -->

10:08 Register;

Послідовність: 1.операція, reducer; 2.dispatch with Component; 3.action =
operation //operation(dir object) 4.payload: {user, token} 5.закинути в
операцію.fulfilled цей obj 6.token save in state

17:57 Bearer - носитель axios.defaults.headers.common.Authorization;

21:12 AppBar;

22:56 Login; operation перевір, що треба беку? React Helmet;

27:45 LogOut;

33:55 get req for contacts there is token(bacause of
axios.defaults.headers.common.Authorization);

39:36 Refresh; не завжди працює two cases 45:56 в thunkAPI є доступ к state:
thunkAPI.getState().auth;

45:53 refreshUser; check: is token in redux state?

52:28 Error if (!token) { return thunkAPI.rejectWithValue('No valid token') };
якщо вийшли - нічого не було rejected; якщо token немає і просто зробити return
-> він вважає, що fulfilled(типу return щось у promise) тому return
thunkAPI.rejectWithValue('No valid token')
