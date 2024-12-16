import { supabase } from '../config/supabase';

export const logout = async () => {
    try {
        await supabase.auth.signOut();
        localStorage.removeItem('supabase.auth.token');
    } catch (error) {
        console.error('Erro ao fazer logout:', error);
    }
};