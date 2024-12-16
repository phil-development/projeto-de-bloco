import React, { createContext } from 'react';
import { SupabaseClient } from '@supabase/supabase-js';
import { SupabaseContextProps } from './types';
import { supabase } from '../../config/supabase';

export const SupabaseContext = createContext<SupabaseContextProps>({
    supabase: supabase as SupabaseClient,
});

export const SupabaseContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <SupabaseContext.Provider value={{ supabase }}>
            {children}
        </SupabaseContext.Provider>
    );
};