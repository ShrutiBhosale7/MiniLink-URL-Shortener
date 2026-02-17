package com.url.shortner.security.jwt;

import com.url.shortner.service.UserDetailsImpl;
import io.jsonwebtoken.JwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import javax.crypto.SecretKey;
import java.security.Key;
import java.util.Date;
import java.util.stream.Collectors;

//this will have all utility methods that our application will need to extract jwt token from header
//when  request is made on authenticated  endpoint a jwt token is passed everytime and not only the user name and password
//token is passed using Authorization header
@Component
public class JwtUtils
{
    @Value("${jwt.secret}")
    private String jwtSecret;

    @Value("${jwt.expiration}")
    private int jwtExpirationMs;



    //    Authorization : Bearer <TOKEN>
    public String getJwtFromHeader(HttpServletRequest request) { //method to extract token from user
        {
            String bearertoken = request.getHeader("Authorization");
            if (bearertoken != null && bearertoken.startsWith("Bearer ")) {
                return bearertoken.substring(7);

            }
            return null;
        }
    }

    public String generateToken(UserDetailsImpl userDetail)
    {
        String username= userDetail.getUsername();
        String roles=userDetail.getAuthorities().stream()
                .map(authority->authority.getAuthority())
                .collect(Collectors.joining(","));

                return Jwts.builder()
                        .subject(username)
                        .claim("roles",roles)
                        .issuedAt(new Date())
                        .expiration(new Date((new Date().getTime()+ jwtExpirationMs)))
                        .signWith(key())
                        .compact();
    }

    public String getUserNameFromJwtToken(String token)
    {
        return Jwts.parser()
                .verifyWith((SecretKey) key())
                .build().parseSignedClaims(token)
                .getPayload().getSubject();
    }

    private Key key()
    {

        return Keys.hmacShaKeyFor(Decoders.BASE64.decode(jwtSecret));
    }

    public boolean validateToken(String authToken)
    {
        try {
            Jwts.parser().verifyWith((SecretKey) key())
                    .build().parseSignedClaims(authToken);
        } catch (JwtException e) {
            throw new RuntimeException(e);
        } catch (IllegalArgumentException e) {
            throw new RuntimeException(e);
        }
        catch (Exception e) {
            throw new RuntimeException(e);
        }

        return true;
    }
}
