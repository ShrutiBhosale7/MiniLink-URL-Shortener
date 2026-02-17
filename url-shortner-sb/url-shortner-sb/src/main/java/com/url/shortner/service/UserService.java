package com.url.shortner.service;

import com.url.shortner.dtos.LoginRequest;
import com.url.shortner.models.User;
import com.url.shortner.repository.UserRepository;
import com.url.shortner.security.jwt.JwtAuthenticationResponse;
import com.url.shortner.security.jwt.JwtUtils;
import lombok.AllArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class UserService {

    private PasswordEncoder passwordEncoder;

    private UserRepository userRepository;

    private AuthenticationManager authenticationManager;

    private JwtUtils jwtUtils;

    public User registerUser(User user){
        user.setPassword(passwordEncoder.encode(user.getPassword()));

        return userRepository.save(user);

    }

    public JwtAuthenticationResponse authenticateUser(LoginRequest loginRequest){

        Authentication authentication= authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginRequest.getUsername(),
                        loginRequest.getPassword()));  //Instance containing credentials(username/password is being created) and passed to authenticateManger

        SecurityContextHolder.getContext().setAuthentication(authentication);  //setting securitycontext

        UserDetailsImpl userDetail =(UserDetailsImpl) authentication.getPrincipal();  //generate the token by getting userdetails

        String jwt =jwtUtils.generateToken(userDetail);

        return new JwtAuthenticationResponse(jwt);

    }

//    Helps to retrieve information with the help of username
    public User findByUsername(String name) {
        return userRepository.findByUsername(name).orElseThrow(
                ()-> new UsernameNotFoundException("User not found with username:" +name)
        );
    }
}
