package com.url.shortner.security.jwt;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;
//for every request this class is executed


//Custom filter that is created for the application
@Component
public class JwtAuthenticationFilter extends OncePerRequestFilter {

    @Autowired
    private JwtUtils jwtTokenProvider;

    @Autowired
    private UserDetailsService userDetailsService;

//adds operation that will help to authenticate request

//    responsible for validation of JWT token
    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        try {
            //following are the steps for authenticating the request

//            1.Get the JWT token
//            2.Validate the token
//            3.If valid get user details
//            get username ->load user->set auth context
        String jwt=jwtTokenProvider.getJwtFromHeader(request);

//        Responsible for loading the user information
        if(jwt!=null && jwtTokenProvider.validateToken(jwt))
        {
            String username=jwtTokenProvider.getUserNameFromJwtToken(jwt);
            UserDetails userDetails=userDetailsService.loadUserByUsername(username);

            if(userDetails != null)
            {
                UsernamePasswordAuthenticationToken authentication=new UsernamePasswordAuthenticationToken(userDetails,null,userDetails.getAuthorities());
                authentication.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
                SecurityContextHolder.getContext().setAuthentication(authentication);

            }
        }

        } catch (Exception e) {
            throw new RuntimeException(e);
        }

        filterChain.doFilter(request,response);
    }
}
