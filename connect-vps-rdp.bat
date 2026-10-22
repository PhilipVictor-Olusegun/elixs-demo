@echo off
echo ==========================================
echo VPS RDP Connection - SSH Tunnel
echo ==========================================
echo.
echo Creating secure SSH tunnel to VPS...
echo This window must stay open while you use RDP
echo.
echo Press Ctrl+C to close the tunnel when done
echo.

C:\Windows\System32\OpenSSH\ssh.exe -i "C:\Users\O D G\Downloads\USkey.pem" -L 13389:localhost:3389 ubuntu@54.196.214.0

pause
