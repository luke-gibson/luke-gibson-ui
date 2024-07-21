export const useLoggedInUser = async () => {
    const client = useSupabaseClient();
    const { data } = await client.auth.getUser();
  
    const { data: profile } = await client
      .from('profile')
      .select('*')
      .eq('id', data.user.id)
      .single();
  
    return {
      user: data.user,
      profile
    };
  };