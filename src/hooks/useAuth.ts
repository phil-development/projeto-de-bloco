import { useState, useEffect } from 'react';
import { supabase } from '../config/supabase';
import { User } from '@supabase/supabase-js';

const useAuth = () => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const getUser = async () => {
            const { data: { user } } = await supabase.auth.getUser();
            setUser(user);
        };

        getUser();

        const authListener = supabase.auth.onAuthStateChange((_event, session) => {
            console.log('Evento de autenticação:', _event);
            console.log('Sessão:', session);
            if (session) {
                setUser(session.user);
            } else {
                setUser(null);
            }
        });

        return () => {
            authListener.data.subscription.unsubscribe();
        };
    }, []);

    return { user };
};

export default useAuth;